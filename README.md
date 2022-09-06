# Simon Says

## Description

A simple HTML-CSS-JS **web app** that implements the classic game of **Simon Says**.

## Conceptualization and Solutions

### Interface

The Interface needs to have a **circle** with each quadrant colored differently that light up when the game is showing the **sequence** to replicate.

Additionally an interactive and dynamic button in the center needs to be able to:

* Start the game
* Continue the game in case of a *win*
* Restart the game in case of a *fail*

#### Implementation of the interface

##### Colors

One important aspect of Simon Says are the colors: they need to be different enough and vibrant. One easy mistake is choosing colors that are vibrant but also clash quite harshly, creating a little bit of an eye-sore.

After spending some time testing on PhotoShop and researching photos online, I found a quaternary combination of color that follows closely the original Simon Says colors, but still manages to look modern. To add to the modern feel of the web app, I also decided to go for a minimalist dark background with white text.

The **Color Scheme**:

* #43bee5
* #f40058
* #efa500
* #41b853

The **dark background** is #161B40.

To achieve the "blinking effet" I decided to make use of the **opacity** property in CSS, although I plan to improve the look of it further with subsequent versions.

##### Layout

The Layout still requires some work since the Web App is in testing fase in regards of the its internal logic through JavaScript.

But the basics for a functional and responsive MVP has been reached.

The Simon Says "board" has been wrapped in a responsive div container with **display: flex** property to center the board in the middle of the viewport regardless of the size of the window or screensize.

The Simon Says board has been given a circle-shape through a custom class that. Within this, 4 divs have been created, one for each colored button. I decided to give them some air in between for aesthetic and functional reasons. I implemented a hover and press effect on each of these colored buttons that make them "pop out" for visual feedback to the user. The hover effects have been placed in a media query so that they are active only when the device is hoverable (i.e. not mobile devices).

### JavaScript Code (Logic of the game)

Simon Says works by showing a **sequence of colors** that blink for a limited amount of time and then the user needs to press the buttons in the **correct order**. The game then recognizes a **win** if the player presses all the buttons in the correct order and a **fail** if the player presses a wrong button.

In case of a **win** the sequence is increased by one extra button each time.
In case of a **fail** the sequence length is reset to initial default.

#### Implementation of the JavaScript

##### Global Variables

I minimized the Global Variables to the ones that are necessary only throughout the entire game.

* **startBtn** is a reference to the initial Start Button at the center of Simon Says that launches the game
* **start**: *boolean* value initialised at false, because the game hasn't started yet. This variable also makes sure that the user can't click the buttons while the game is not on and when the game is showing the sequence to follow. This has a double function of UX(without the ability to hover or click the user understands that it can't press the buttons yet) and coding(the buttons work only when the game is started, otherwise pressing on them doesn't do anything).
* **challengeSeq**: *array* that dynamically records the current active sequence for the Simon Says challenge
* **sequencePos**: *integer* value that functions as an index for the **challengeSeq** array. It starts at 0 (first element of the sequence). It's increased by 1 every time the user guesses the button correctly and it is reset to 0 when the user reaches the end of the challengeSeq (win) or when the user guesses the wrong button (fail).

## Versions

### 0.7.1: Added README JavaScript section

* Also fixed minor bug with JavaScript **started** variable that wasn't being turned to false when the game ended

### 0.7: Adding README documentation

### 0.6: Improved legibility of the code

### 0.5: Added functionalities to buttons

* Buttons can't be hovered on while the ame is paused

### 0.4: Added Lose condition for Simon Says

### 0.3: Created Functional Simon Says Win

#### Known Issues

* Lose condition not working properly

### 0.2: Basic JS added

### 0.1: basic html and CSS added