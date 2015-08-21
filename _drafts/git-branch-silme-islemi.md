---
title: Git - Branch Silme İşlemi
permalink: /git-branch-silme-islemi
categories: [programming]
tags: [git]
references: [
	'http://stackoverflow.com/questions/2003505/delete-a-git-branch-both-locally-and-remotely'
]
---

###Lokal Branch İçin

`git branch -D {branch-name}`

###Remote Branch İçin

`git push {remote-name} :{branch-name}` yani:

`git push origin :feature-branch`