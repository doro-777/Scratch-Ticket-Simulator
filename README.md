# Scratch Ticket Simulator

This is a web-based scratch ticket simulator that mimics the experience of scratching off a lottery ticket.
- Try it out: https://doro-777.github.io/Scratch-Ticket-Simulator/

## Features

- Simulates a scratch-off lottery ticket experience in the browser
- Randomly selects from 8 different ticket outcome
- Supports both mouse and touch input for scratching
- Responsive design that works on desktop and mobile devices

## How It Works

The simulator uses two canvas layers:
1. A bottom layer (`ticketCanvas`) that displays the lottery ticket image
2. A top layer (`scratchCanvas`) with a silver scratch-off coating

When users drag their mouse or finger across the screen, the silver coating is removed to reveal the ticket underneath, mimicking the physical action of scratching a lottery ticket.

## Files

- index.html - Main HTML structure
- script.js - JavaScript functionality for the scratch mechanics
- styles.css - Styling and responsive design
- silver_scratch.png - The scratch-off layer image
- Tickets - Directory containing the 8 different ticket outcomes (000.png through 111.png)

## Usage

Simply open index.html in a web browser and use your mouse or finger to scratch off the silver coating to reveal your ticket.
