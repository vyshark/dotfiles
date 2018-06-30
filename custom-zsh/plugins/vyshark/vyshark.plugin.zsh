# Add your own custom plugins in the custom/plugins directory. Plugins placed
# here will override ones with the same name in the main plugins directory.
export EDITOR='vim'
alias k='clear'
alias subliminal='subliminal download -l en -s'
alias r.ranger='SHELL=/home/vyshark/.local/bin/r.shell ranger'
export ORACLE_HOME=/usr/lib/oracle/product/11.2.0/xe
export ORACLE_SID=XE
export NLS_LANG=`$ORACLE_HOME/bin/nls_lang.sh`
export PATH=$PATH:$ORACLE_HOME/bin
