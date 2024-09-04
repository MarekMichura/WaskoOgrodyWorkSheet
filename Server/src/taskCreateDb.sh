#!/bin/bash

set -e

export PATH="$PATH:$HOME/.dotnet/tools/"

if [ -n "$1" ]; then
    dotnet ef migrations add "$1"
fi

./wait-for-it.sh db:1433 --timeout=60 --strict -- echo "SQL Server is up"

dotnet ef database update