export LANG='en_US.UTF-8'
export LANGUAGE='en_US:en'
export LC_ALL='en_US.UTF-8'
export TERM=xterm

##### Zsh/Oh-my-Zsh Configuration
export ZSH="/root/.oh-my-zsh"

ZSH_THEME="powerlevel10k/powerlevel10k"
plugins=(zsh-autosuggestions zsh-completions zsh-history-substring-search fast-syntax-highlighting )


source $ZSH/oh-my-zsh.sh
POWERLEVEL9K_SHORTEN_STRATEGY="truncate_to_last"
POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(user dir vcs status)
POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=()
POWERLEVEL9K_STATUS_OK=false
POWERLEVEL9K_STATUS_CROSS=true

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

echo "Helpful Commands: \n" \
    "yarn start \t | start the built code\n" \
    "yarn build \t | build the typescript to javascript\n" \
    "yarn dev \t | run without building ( using ts-node )\n" \
    "yarn dev:watch  | watch the code and restart on change\n" \
    "yarn lint \t | point out style issues with the source code\n" \
    "yarn lint:fix \t | fix styling issues\n" \
    "yarn test \t | run the tests\n" \
    "yarn test:watch | re-run the tests on code change\n" 