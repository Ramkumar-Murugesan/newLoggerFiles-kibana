executemobile(){
echo 'inside mobile'
echo 'directory changes'
cd   projects/mobile/android/platforms/android/app/build/outputs/apk/debug/
pwd
echo ' APK file uploaded'
curl -H "X-InstallrAppToken:"  https://www.installrapp.com/apps.json -F qqfile=@app-debug.apk --verbose >ApkUploadSucess.json
}
executetablet(){
echo 'inside tablet'
echo 'directory changes'
cd   projects/Tablet/android/platforms/android/app/build/outputs/apk/debug/
pwd
echo ' APK file uploaded'
curl -H "X-InstallrAppToken:"  https://www.installrapp.com/apps.json -F qqfile=@app-debug.apk --verbose >ApkUploadSucess.json
}
# call arguments verbatim:
$@