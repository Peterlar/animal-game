# Amazing Animal Game
Amazing Animal Game is an children friendly version of the traditional Rock Paper Scissor game wich is considered to be the oldest game in the world. The purpose of the game is to be simple and easy to understand for kids in every situation in life. The simplicity of the game will occupie parents kids when it's needed in different difficult situtions , like driving in the car or sitting in a buisness meeting. The game main focus points is colours, animation and simple buttons rather than popups with a lot of text wich make the game even usable for children with different types of handicaps.

![image](https://user-images.githubusercontent.com/100356636/167257264-63018995-8998-417d-b6b9-ee9c45e22d68.png)

# Features

__The Amazing Animal Game Logo and Heading__

When the player enters the landing page the title " Amazing Animal Game " is visible with big black bold letters to fit the green background image with animated animals. The font style used is called "Orelega One" . The style is choosen to have a clear and easy visability for the player.
![image](https://user-images.githubusercontent.com/100356636/167257526-636f3d03-418f-48da-b633-0c544f375615.png)

- Rules Button

The rules button is centered below the title and logo and has an hidden information. The player has to press the button in order to se the rules of the game, if needed. When the button is pressed the rules will appear with the emojis used as buttons in order for the player to understand what the gaming area buttons are for.

![image](https://user-images.githubusercontent.com/100356636/167258008-db542420-0413-48be-8b16-f883c7d65c42.png)

When button is pressed

![image](https://user-images.githubusercontent.com/100356636/167618821-0987eca8-a6f6-4086-8712-3097e45b4ec9.png)


- Emoji Buttons Section " Gaming Area"

When the players wants to choose one of the animl to play againts the the computer the player needs to point the arrow over the animal. When it's hovering over the emoji the emoji will expand to a bigger size. This function will make the player understand what buttons is about to be choosen.

![image](https://user-images.githubusercontent.com/100356636/167258365-c60ce6e8-cc5b-4215-a79e-422e848d4c27.png)

When arrow howers over the emoji.

![image](https://user-images.githubusercontent.com/100356636/167395641-cdfbd7e8-bf90-4726-a76d-4f14d330ce59.png)


- Visible Score Section " Gaming Area"

The score section is placed below the emoji buttons with an fat bold style. The font style used the same as in the title " Orelega one". This section will alow the player to se the actual score of the game.

![image](https://user-images.githubusercontent.com/100356636/167395312-60bcfcdc-317b-4ada-b947-a49a6893523e.png)

When the score is counted.

![image](https://user-images.githubusercontent.com/100356636/167395424-f288d97b-d5f2-476c-a797-4dcf59027cc2.png)

- Restart button Section " Gaming Area"

When the player wants to finish the game or restart the game the player can hit the restart button and the whole page will reload and the landing page will start from the beginning. This means that the rules will be hidden on the page until the player hits the button. The score will also be set to zero for both the player and the computer.

![image](https://user-images.githubusercontent.com/100356636/167398014-800ffa93-a8f7-44d1-991d-ff543241b3f2.png)

When the restart button is pressed.

![image](https://user-images.githubusercontent.com/100356636/167398101-560a9105-8a76-460d-b86b-0b645f2bbbc8.png)

# Features left to implement

- Animated welcome video showing battle with the animals.
- Pop up message with selected animals

# Testing

**Functional testing**

Testing was made to make sure that the buttons and score was functioning well with out delays or errors on various devices. The testing was made by playing the game on severeral different brands and screen sizes. The rules button was pressed to make sure the rules where visible and then the game was played to 10 before hitting the restart button.

### Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined in [WCAG 2.1 Reflow criteria for responsive design](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) on Chrome.

Steps to test:

1. Open browser and navigate to https://peterlar.github.io/animal-game/
2. Open the developer tools (right click and inspect)
3. Set to responsive and decrease width to 320px
4. Set the zoom to 50%
5. Click and drag the responsive window to maximum width

Expected:

Website is responsive on all screen sizes and no images are pixelated or stretched.
No horizontal scroll is present.
No elements overlap.

Website was also opened on the following devices:

- Iphone SE
- Iphone XR
- Iphone 12 pro
- Pixel 5
- Samsung Galaxy 8
- Samsung Galaxy S20 Ultra
- Nest Hub Max

**Validator Testing**

- HTML

One error was mentioned at the official W3C validator. Problem was that paragrafs can not be a child of an UL element. It was updated to LI instead.

- CSS

One parcing error was found through the official (Jigsaw) validator. I removed the shadow function as it was not needed wich solved the error.

- Javascript

A couple of warnings was found passing through the official Jshint validator. It was solved by adding semicolons.

- There are 10 functions in this file.

- Function with the largest signature take 2 arguments, while the median is 1.

- Largest function has 7 statements in it, while the median is 1.5.

- The most complex function has a cyclomatic complexity value of 3 while the median is 1.


## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab.
  - Scroll down to "Pages" on the left side.
  - Click "Pages".
  - A live link will be displayed in a green banner when published successfully. 

The live link can be found here https://peterlar.github.io/animal-game/

## Credits 
I want to give credits to web dev simplified that has alot of tutorials and buildt the gaming area. Also want to give credits to W3 school helping med finding the right buttons.

## Media
Background image was found at https://se.dreamstime.com/themed-djur-bakgrund-f%C3%B6r-djungel-eller-zoo-image117102178.
Emojis can be found at Hotemoji.com

## Other General Project Advice
Due to earlier problems with gitpod pushing errors to github i worked in 2 respitories this time to find out what caused the issues. Project was built in https://github.com/Peterlar/RockPaperScissors-. You will find all updates there.
