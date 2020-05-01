require 'yaml'
require 'test/unit'
require 'fileutils'
require 'json'

##
# Module to include in tests that provides helper functions.
module TestHelper

  ##
  # Reads the fixtures in as a hash.
  #
  # @return [Hash]
  def fixtures
    @fixtures ||= YAML.load_file(File.join(__dir__, 'fixtures.yml'))
  end

  def spoonerism(words, opts = {})
    Spoonerise::Spoonerism.new(words) do |s|
      opts.each { |k, v| s.send("#{k}=", v) }
    end
  end

  def test_log_directory
    @tld ||= File.join(__dir__, 'log')
  end

  def test_log_file
    @tlf ||= File.join(test_log_directory, 'spoonerise.csv')
  end

  ##
  # Creates instance of +Cli+.
  #
  # @param [Array] options Parsed by +getopts+
  #
  # @return [Spoonerise::Cli]
  def cli(options = [])
    Spoonerise::Cli.new(fixtures['default_words'] + options)
  end
end
