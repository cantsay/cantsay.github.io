@echo off
SET interactive=1
ECHO %CMDCMDLINE% | FIND /I "/c" >NUL 2>&1
IF %ERRORLEVEL% == 0 SET interactive=0

cd %~dp0
node installnodedeps
ECHO Attempting to fix...
ECHO This window will close automatically when done.
eslint . --fix

IF "%interactive%"=="0" PAUSE
EXIT /B 0
