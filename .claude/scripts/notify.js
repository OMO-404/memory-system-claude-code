#!/usr/bin/env node

const path = require('path');

// 解析命令行参数
function parseArgs(args) {
    const result = { title: 'Claude Code', message: '任务完成' };
    for (let i = 0; i < args.length; i++) {
        if (args[i] === '-Title' && args[i + 1]) {
            result.title = args[++i];
        } else if (args[i] === '-Message' && args[i + 1]) {
            result.message = args[++i];
        }
    }
    return result;
}

const args = parseArgs(process.argv.slice(2));

// 使用 Windows 原生通知（通过 PowerShell 回退）
const { execSync } = require('child_process');

try {
    const psCommand = [
        'Add-Type -AssemblyName System.Windows.Forms;',
        '$notify = New-Object System.Windows.Forms.NotifyIcon;',
        '$notify.Icon = [System.Drawing.SystemIcons]::Information;',
        '$notify.BalloonTipIcon = "Info";',
        `$notify.BalloonTipTitle = '${args.title.replace(/'/g, "''")}';`,
        `$notify.BalloonTipText = '${args.message.replace(/'/g, "''")}';`,
        '$notify.Visible = $true;',
        '$notify.ShowBalloonTip(5000);',
        'Start-Sleep -Seconds 5;',
        '$notify.Dispose();'
    ].join(' ');

    execSync(`powershell -NoProfile -Command "${psCommand}"`, { stdio: 'ignore' });
} catch (error) {
    // 静默失败
}
