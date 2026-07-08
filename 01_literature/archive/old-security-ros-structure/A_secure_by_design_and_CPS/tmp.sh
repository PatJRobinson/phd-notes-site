filepath=$1
filename="${filepath##*/}"
ln -s ~/Documents/notes/phd-notes/annotations/$filename ./$filename
