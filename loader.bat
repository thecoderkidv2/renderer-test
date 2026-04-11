@echo off
cd /d "%~dp0"
start "" http://localhost:8000
powershell -NoProfile -Command "$l = [System.Net.HttpListener]::new();$l.Prefixes.Add('http://localhost:8000/');$l.Start();while ($l.IsListening) { $c = $l.GetContext();$p = $c.Request.Url.LocalPath.TrimStart('/');if ($p -eq '' -or $p -eq '/') { $p = 'index.html' };$f = Join-Path '%~dp0' $p;if (Test-Path $f -PathType Leaf) { $b = [System.IO.File]::ReadAllBytes($f);$c.Response.OutputStream.Write($b,0,$b.Length) } else { $c.Response.StatusCode = 404 };$c.Response.Close() }"
pause
exit /b