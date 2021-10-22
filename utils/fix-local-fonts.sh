#!/usr/bin/env bash

sed -i.bak 's,_next/static/media,../media,g' out/**/*.css
rm -rf out/**/*.bak
