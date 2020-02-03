#!/bin/bash
git add *
git commit -m "update"
git pull
git push
mshta "javascript:alert('Git commit!');close();"