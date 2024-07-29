# Average Calculator Microservice

This is an Average Calculator microservice built using Node.js and Express. The service fetches numbers from a third-party server based on a specified type (prime, Fibonacci, even, or random), stores them uniquely, and calculates their average.

## Features

- Fetches numbers from a third-party server.
- Stores unique numbers up to a configurable window size.
- Calculates the average of the stored numbers.
- Responds to requests within 500 milliseconds.
- Handles timeouts and errors gracefully.

## Getting Started

### Prerequisites

- Node.js (v12.x or higher)
- npm (v6.x or higher)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/average-calculator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd average-calculator
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Service

Start the server:

```bash
node index.js

The server will run on http://localhost:9876.

### API Endpoints
Prime Numbers: /numbers/p
Fibonacci Numbers: /numbers/f
Even Numbers: /numbers/e
Random Numbers: /numbers/r
