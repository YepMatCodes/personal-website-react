#!/usr/bin/env bash

# Get ANSI style escape codes
bold=$(tput bold)
normal=$(tput sgr0)

ignore_branch_check=false

# Check if the ignore branch check flag is set
while getopts ":i-" opt; do
  case $opt in
    i)
      ignore_branch_check=true
      ;;
    -)
      if [[ $OPTARG == "ignore" ]]; then
        ignore_branch_check=true
      else
        echo "Invalid option: --$OPTARG" >&2
        exit 1
      fi
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
  esac
done

deploy() {
    # Confirm before running
    echo -e "\033[1mAre you sure you want to make the current changes live? (y/n)\033[0m "
    read answer

    # Check the user's response
    if [[ $answer == [Yy] ]]; then
        rsync -rlgoDzcv ./build/ node-lightsail:~/htdocs/
        echo "Project deployed successfully."
    else
        echo "Operation canceled."
        exit 1
    fi
}

branch=$(git rev-parse --abbrev-ref HEAD)

# Deployments should only be possible from the release branch unless check is ignored
if [ "$branch" == "release" ] || [ $ignore_branch_check == true ]; then
    deploy
else
    echo -e "You are currently on the ${bold}$branch${normal} branch."
    echo -e "Please checkout the ${bold}release${normal} branch and try again."
    exit 1
fi