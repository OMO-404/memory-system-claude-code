# Archive old files from active/ to archived/
$projectDir = "{your projectDir}memery-system"
$activePath = Join-Path $projectDir "active"
$archivedPath = Join-Path $projectDir "archived"
$today = Get-Date -Format "yyyy-MM-dd"

if (Test-Path $activePath) {
    $oldFiles = Get-ChildItem -Path $activePath -Filter "*.md" | Where-Object { $_.Name -notlike "$today*" }

    if ($oldFiles) {
        foreach ($file in $oldFiles) {
            Write-Host "Archiving: $($file.Name)"
            Move-Item -Path $file.FullName -Destination $archivedPath -Force
        }
        Write-Host "Archived $($oldFiles.Count) file(s)"
    }
}
