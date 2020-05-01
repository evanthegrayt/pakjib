var search_data = {"index":{"searchIndex":["spoonerise","bumper","cli","log","spoonerism","all_excluded_words()","bump()","contents()","each()","enough_flippable_words?()","execute()","lazy?()","longest_word_length()","map?()","new()","new()","new()","new()","print?()","print_log()","print_mappings()","reverse?()","save()","save?()","size()","spoonerise()","spoonerism()","to_h()","to_json()","to_s()","write()","readme"],"longSearchIndex":["spoonerise","spoonerise::bumper","spoonerise::cli","spoonerise::log","spoonerise::spoonerism","spoonerise::spoonerism#all_excluded_words()","spoonerise::bumper#bump()","spoonerise::log#contents()","spoonerise::log#each()","spoonerise::spoonerism#enough_flippable_words?()","spoonerise::cli::execute()","spoonerise::spoonerism#lazy?()","spoonerise::cli#longest_word_length()","spoonerise::cli#map?()","spoonerise::bumper::new()","spoonerise::cli::new()","spoonerise::log::new()","spoonerise::spoonerism::new()","spoonerise::cli#print?()","spoonerise::cli#print_log()","spoonerise::cli#print_mappings()","spoonerise::spoonerism#reverse?()","spoonerise::spoonerism#save()","spoonerise::cli#save?()","spoonerise::log#size()","spoonerise::spoonerism#spoonerise()","spoonerise::cli#spoonerism()","spoonerise::spoonerism#to_h()","spoonerise::spoonerism#to_json()","spoonerise::spoonerism#to_s()","spoonerise::log#write()",""],"info":[["Spoonerise","","Spoonerise.html","","<p>The main namespace for the gem.\n"],["Spoonerise::Bumper","","Spoonerise/Bumper.html","","<p>Class that handles bumping an index.\n"],["Spoonerise::Cli","","Spoonerise/Cli.html","",""],["Spoonerise::Log","","Spoonerise/Log.html","","<p>Class that handles reading/writing logs.\n"],["Spoonerise::Spoonerism","","Spoonerise/Spoonerism.html","","<p>The main word-flipper.\n"],["all_excluded_words","Spoonerise::Spoonerism","Spoonerise/Spoonerism.html#method-i-all_excluded_words","()","<p>Returns an array of words to exclude by combining three arrays:\n<p>Any word in the passed arguments that&#39;s …\n"],["bump","Spoonerise::Bumper","Spoonerise/Bumper.html#method-i-bump","()","<p>bumps current value\n"],["contents","Spoonerise::Log","Spoonerise/Log.html#method-i-contents","()","<p>The contents of the log file.\n<p>@return [Array]\n"],["each","Spoonerise::Log","Spoonerise/Log.html#method-i-each","()","<p>Iterate through each line of the file.\n"],["enough_flippable_words?","Spoonerise::Spoonerism","Spoonerise/Spoonerism.html#method-i-enough_flippable_words-3F","()","<p>Returns true if there are more than one non-excluded word to flip\n"],["execute","Spoonerise::Cli","Spoonerise/Cli.html#method-c-execute","(options = [])","<p>Creates an instance of <code>StandupMD</code> and runs what the user requested.\n"],["lazy?","Spoonerise::Spoonerism","Spoonerise/Spoonerism.html#method-i-lazy-3F","()","<p>Should the lazy words be excluded?\n"],["longest_word_length","Spoonerise::Cli","Spoonerise/Cli.html#method-i-longest_word_length","()",""],["map?","Spoonerise::Cli","Spoonerise/Cli.html#method-i-map-3F","()",""],["new","Spoonerise::Bumper","Spoonerise/Bumper.html#method-c-new","(initial_value, max_length, reverse = false)","<p>Sets the bumper relative to the current index of words array. If on the last element of the words array, …\n"],["new","Spoonerise::Cli","Spoonerise/Cli.html#method-c-new","(options)",""],["new","Spoonerise::Log","Spoonerise/Log.html#method-c-new","(file)","<p>Constructor for Log.\n<p>@param [String] file\n<p>@return [Spoonerise::Log]\n"],["new","Spoonerise::Spoonerism","Spoonerise/Spoonerism.html#method-c-new","(words)","<p>Initialize instance and raise if there aren&#39;t enough words to flip.\n<p>@param [Array] words\n"],["print?","Spoonerise::Cli","Spoonerise/Cli.html#method-i-print-3F","()",""],["print_log","Spoonerise::Cli","Spoonerise/Cli.html#method-i-print_log","()",""],["print_mappings","Spoonerise::Cli","Spoonerise/Cli.html#method-i-print_mappings","()",""],["reverse?","Spoonerise::Spoonerism","Spoonerise/Spoonerism.html#method-i-reverse-3F","()","<p>Should the words flip the other direction?\n"],["save","Spoonerise::Spoonerism","Spoonerise/Spoonerism.html#method-i-save","()","<p>Saves the flipped words to the log file, along with the options\n"],["save?","Spoonerise::Cli","Spoonerise/Cli.html#method-i-save-3F","()",""],["size","Spoonerise::Log","Spoonerise/Log.html#method-i-size","()","<p>Number of entries in the file.\n<p>@return [Integer]\n"],["spoonerise","Spoonerise::Spoonerism","Spoonerise/Spoonerism.html#method-i-spoonerise","()","<p>Iterates through words array, and maps its elements to the output of flip_words. Returns results as an …\n"],["spoonerism","Spoonerise::Cli","Spoonerise/Cli.html#method-i-spoonerism","()","<p>Sets up an instance of <code>Spoonerise::Spoonerism</code> and passes all user preferences.\n<p>@return [Spoonerise::Spoonerism] …\n"],["to_h","Spoonerise::Spoonerism","Spoonerise/Spoonerism.html#method-i-to_h","()","<p>Returns hash of the original words mapped to their flipped counterparts.\n"],["to_json","Spoonerise::Spoonerism","Spoonerise/Spoonerism.html#method-i-to_json","()","<p>Same as to_h, but as json.\n"],["to_s","Spoonerise::Spoonerism","Spoonerise/Spoonerism.html#method-i-to_s","()","<p>Returns spoonerise array as a joined string.\n"],["write","Spoonerise::Log","Spoonerise/Log.html#method-i-write","(row)","<p>Writes a line to the log.\n<p>@param [Array] row\n<p>@return [Array]\n"],["README","","README_md.html","","<p>Welcome to Spoonerise – a word game\n<p>We&#39;ve all done it; someone says a phrase, and you flip the first …\n"]]}}