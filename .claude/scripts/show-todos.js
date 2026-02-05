#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const todoDir = path.join(process.cwd(), 'todo');

if (!fs.existsSync(todoDir)) {
    console.log('Todo 目录不存在');
    process.exit(0);
}

const files = fs.readdirSync(todoDir)
    .filter(f => f.endsWith('.md') || f.endsWith('.txt'))
    .sort();

if (files.length === 0) {
    console.log('无待办事项');
    process.exit(0);
}

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('📋 待办事项 (TODO)');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

files.forEach((file, index) => {
    const filePath = path.join(todoDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const title = file.replace(/\.(md|txt)$/, '');

    console.log(`${index + 1}. ${title}`);
    console.log(`   文件: ${file}`);

    // 显示第一行作为描述
    const firstLine = content.split('\n')[0].trim();
    if (firstLine && !firstLine.startsWith('#')) {
        console.log(`   描述: ${firstLine.substring(0, 50)}${firstLine.length > 50 ? '...' : ''}`);
    }
    console.log('');
});

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
