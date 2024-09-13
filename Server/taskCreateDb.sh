#!/bin/bash

set -e
echo "script started: "
date +"%T.%N"

export PATH="$PATH:$HOME/.dotnet/tools/"

if [ -n "$1" ]; then
    dotnet ef migrations add "$1"
fi

./wait-for-it.sh db:1433 --timeout=60 --strict -- echo "SQL Server is up"
echo "db started: "
date +"%T.%N"

dotnet ef database update
echo "db builded: "
date +"%T.%N"