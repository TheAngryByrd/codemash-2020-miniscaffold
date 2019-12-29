- title : FsReveal
- description : Introduction to FsReveal
- author : Karlkim Suwanmongkol
- theme : night
- transition : default



***



### Project Zero or Removing barriers for creating OSS libraries

Jimmy Byrd

Codemash 2020

---

### Legend

✅ = Something to add to a checklist

***

### You have an idea

![Good idea](images/good_idea.jpeg)

---

### Create your repository

![New Repository](images/new_repo.png)

---

### Get to coding

![Typing furiously](images/get_to_coding.gif)

---

### Problem solved

--- 

### Shipping 

***

### Your first issue

A new feature idea

---

### Strangely worded, needs a lot of feedback about the use case

✅ Create an issue template for features

---

### How do I build this thing again?

✅ I should create a script

---

### How do I publish again?

✅ I should add the publishing to this script

*** 

### Checklist

- Create an issue template for features
- Have a build script
    - Have a publish step

***

### Issue #2

That new feature broke something for someone

---

### Time to write tests

✅ I have to choose a testing library

✅ I should add this to the build script

***

### Issue #3

Why does this library exist? How do I get started?

---

### Write a `README.md`

✅ Explain why this library exists

✅ Explain how to get started

***

### Issue #4

Needs a license

---

### Go through the license choosing process

✅ https://choosealicense.com/

***

### Issue #5

I'd like to contribute but how?

---

### Write up a `CONTRIBUTING.md` guide

✅ Explain what you'd expect a contributor to do

- Prerequisites for contributing
- How to build/test

***

### Checklist

- Create an issue template for features
- Have a build script
    - Have a test step
    - Have a publish step
- Choose a testing library
- Create a README.md
- Choose a License
- Create a CONTRIBUTING.md 

***

### Your first contributor's Pull Request (PR)

Someone just added a new feature

---

### It looks like it works

✅ I have to build it locally, maybe I should create a build server

---

### I have nitpicks about the formatting during review

✅ I should choose a standard formatter for my language

---

### Weird IDE files were added in the commit

✅ I should have a comprehensive `.gitignore` file



***

### 

- API Documentation
- Release Notes/Changelog


---


```
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
```