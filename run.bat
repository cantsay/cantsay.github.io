@echo off
SET interactive=1
ECHO %CMDCMDLINE% | FIND /I "/c" >NUL 2>&1
IF %ERRORLEVEL% == 0 SET interactive=0

cd %~dp0
start http://127.0.0.1:4000
bundle exec jekyll serve

IF "%interactive%"=="0" PAUSE
EXIT /B 0
