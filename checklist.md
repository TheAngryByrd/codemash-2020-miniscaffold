# Outline

## checklist

- [ ] Have a standard codebase structure
    - [ ] ISSUE/PULL_REQUEST templates
    - [ ] src folder
    - [ ] tests folder
    - [ ] docs folder (or DOCUMENTATION.md)
    - [ ] dist folder
    - [ ] CHANGELOG/RELEASE_NOTES
    - [ ] CONTRIBUTING
    - [ ] README
        - [ ] Description 
        - [ ] Answers
            - [ ] Who (maintainers)
            - [ ] What (this project does)
            - [ ] Why (this project exists)
            - [ ] How (Basics of getting started, may defer to docs)
    - [ ] LICENSE
    - [ ] CI files
    - [ ] .editorconfig
    - [ ] .gitignore
    - [ ] dependencies
    - [ ] Build script 
        - [ ] Clean distributables/temp folders
        - [ ] Restore packages
        - [ ] Compile (if necessary)
        - [ ] Run tests
        - [ ] Create distributables (npm/nuget)
        - [ ] Create a release commit
        - [ ] Create a git tag
        - [ ] Create a GitHub release
        - [ ] Push distributables to dependency manager host
        - [ ] Format code
        - [ ] Anything else specific to your language/platform
            - [ ] Sourcelink (.NET)
            - [ ] GenerateAssemblyInfo (.NET)
        - [ ] Generate Docs (if necessary)