* RPS-Multiplayer
Rock, paper, scissors multiplayer game using firebase.

* Instructions

* Create a game that suits this user story:

* Player input box (only 2) 
    - with start button √
    - initial text: Waiting for Player 1/2 √
    - change initial text with user input
    - hide input box & start button with "Hi, user name!"
    - after 2 players show
        - add "It's your turn" text on Player 1 screen / highlights box to indicate turn
        - add "Waiting for {Player 1 Name} to choose" on Player 2
        - swaps after Player 1 chooses

* 3 boxes
  * 2 boxes (Only two users can play at the same time.) 
    - position of boxes start & end √
    - add user names to top of box
    - highlights box to indicate player turn
        -add no border button userGuess in middle (clickable)
        -shows for player 1 after player 2 enters
        -shows for player 2 after player 1 chooses
    - bottom of box lists Wins, losses, and ties √
    - after user choices
        - show user choice in middle text
        - change # of wins/ losses/ ties


  * 1 box (win/lose condition)
    - Both players pick either `rock`, `paper` or `scissors`. 
        - var userGuess array
        - more game logic to come...
    - After the players make their selection, the game will tell them whether a tie occurred or if one player defeated the other.
        - add text to show who wins
    - setTimeout 
        - game reset    

  * The game will track each player's wins and losses.
    - change both bottom of boxes

  * Throw some chat functionality in there! No online multiplayer game is complete without having to endure endless taunts and insults from your jerk opponent. 
    - Not sure how to do this yet

  * Styling and theme are completely up to you. Get Creative!

  * Deploy your assignment to Github Pages.

*** Reminder: Submission on BCS ***

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!
