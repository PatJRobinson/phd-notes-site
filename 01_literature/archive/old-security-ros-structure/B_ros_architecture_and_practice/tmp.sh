filepath="$1"
filename="${filepath##*/}"
ln -s "$1" ./"$filename"
