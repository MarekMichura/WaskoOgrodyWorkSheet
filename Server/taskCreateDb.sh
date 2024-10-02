#!/bin/bash

set -e
echo "script started: "
date +"%T.%N"

export PATH="$PATH:$HOME/.dotnet/tools/"

echo $ASPNETCORE_ENVIRONMENT

if [ -n "$1" ]; then
  if [ "$ASPNETCORE_ENVIRONMENT" == "Production" ]; then
    dotnet ef migrations add "$1" --configuration Release
  else
    dotnet ef migrations add "$1"
  fi
else if [ ! "$(find Migrations -type f -name '*.cs' 2>/dev/null)" ]; then
  if [ "$ASPNETCORE_ENVIRONMENT" == "Production" ]; then
    dotnet ef migrations add "Init" --configuration Release
  else
    dotnet ef migrations add "Init"
  fi
fi; fi

./wait-for-it.sh db:1433 --timeout=60 --strict -- echo "SQL Server is up"
echo "db started: "
date +"%T.%N"

if [ "$ASPNETCORE_ENVIRONMENT" == "Production" ]; then
  dotnet ef database update --configuration Release
else
  dotnet ef database update
fi
echo "db builded: "
date +"%T.%N"
