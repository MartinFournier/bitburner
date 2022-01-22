Example usage via cli
```sh
gh workflow run update-version.yml --ref workflow/update-app -F version="1.8.0" -F ver sionNumber=10 -f changelog="$(cat tools/update-version/changes.md)"
```
