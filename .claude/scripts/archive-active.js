#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectDir = '{路径}memery-system';
const activePath = path.join(projectDir, 'active');
const archivedPath = path.join(projectDir, 'archived');

// 获取今天的日期 (YYYY-MM-DD)
const today = new Date().toISOString().split('T')[0];

if (fs.existsSync(activePath)) {
    const files = fs.readdirSync(activePath)
        .filter(f => f.endsWith('.md'))
        .filter(f => !f.startsWith(today));

    if (files.length > 0) {
        let archivedCount = 0;
        files.forEach(file => {
            const srcPath = path.join(activePath, file);
            const destPath = path.join(archivedPath, file);
            fs.renameSync(srcPath, destPath);
            console.log(`Archiving: ${file}`);
            archivedCount++;
        });
        console.log(`Archived ${archivedCount} file(s)`);
    }
}
