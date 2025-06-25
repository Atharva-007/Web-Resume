# vercel_build.py
import os
import subprocess

def main():
    # Install Python dependencies
    subprocess.check_call(["pip", "install", "-r", "requirements.txt", "-t", "package"])
    
    # Prepare for Vercel
    os.makedirs("package/api", exist_ok=True)
    os.makedirs("package/data", exist_ok=True)
    
    # Copy necessary files
    files_to_copy = [
        "app.py",
        "api/index.py",
        "data/resume_data.json",
        "vercel.json"
    ]
    
    for file in files_to_copy:
        if os.path.exists(file):
            os.rename(file, os.path.join("package", file))
    
    # Copy entire directories
    directories = ["templates", "static"]
    for dir in directories:
        if os.path.exists(dir):
            os.rename(dir, os.path.join("package", dir))

if __name__ == "__main__":
    main()