#!/bin/sh

commit_msg_file="$1"
commit_msg=$(cat "$commit_msg_file")
word_count=$(echo "$commit_msg" | wc -w)

if [ "$word_count" -lt 5 ]; then
  echo "❌ Commit message must be at least 5 words. Got: \"$commit_msg\""
  exit 1
fi

exit 0
