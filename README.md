Berikut adalah kode README.md yang bisa kamu masukkan ke dalam file README.md di repository GitHub-mu:

```markdown
# Library Management System

This project is a backend application developed as a part of a technical test, aimed at managing a library's book lending system. It is built using the **NestJS** framework, with the following key functionalities:

- **Member Management**: Members can borrow and return books under certain conditions.
- **Book Management**: Manage the inventory of books, track borrowed books, and display available books.
- **Penalty System**: Implement penalties for overdue book returns.
- **API Documentation**: API endpoints are documented using **Swagger**.
- **Domain-Driven Design**: The project follows Domain-Driven Design principles.
- **Unit Testing**: Unit tests are implemented to ensure the reliability of the application.

## Project Structure

The project follows the Domain-Driven Design (DDD) pattern:

- **Domain**: Contains the core logic, including entities, value objects, and domain services.
- **Application**: Manages the application logic, including use cases and application services.
- **Infrastructure**: Handles database operations, third-party integrations, and other technical details.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/YOUR_USERNAME/library-management.git
    cd library-management
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up the environment variables:
    - Create a `.env` file in the root directory and configure the database connection and other settings.

4. Run the application:
    ```bash
    npm run start
    ```

## API Documentation

API documentation is provided by Swagger. After running the application, you can access the documentation at:
```
http://localhost:3000/api
```

## Database Schema

The application uses a relational database. The `library_db` database contains the following tables:

### `members` Table

| Column  | Type    | Description          |
|---------|---------|----------------------|
| code    | VARCHAR | Unique member code   |
| name    | VARCHAR | Member's name        |
| penalty_end_date | DATE | Date until the penalty is active |

### `books` Table

| Column  | Type    | Description          |
|---------|---------|----------------------|
| code    | VARCHAR | Unique book code     |
| title   | VARCHAR | Title of the book    |
| author  | VARCHAR | Author of the book   |
| stock   | INT     | Number of copies available |

### `borrowed_books` Table

| Column      | Type    | Description                    |
|-------------|---------|--------------------------------|
| member_code | VARCHAR | References `members(code)`     |
| book_code   | VARCHAR | References `books(code)`       |
| borrow_date | DATE    | Date when the book was borrowed|
| return_date | DATE    | Date when the book was returned|

## Testing

Run unit tests using:
```bash
npm run test
```

## Algorithms Implemented

The project also includes the implementation of the following algorithms:

1. **String Reversal**: Reverse the alphabets in a string while keeping numbers at the end. Example: `"NEGIE1"` becomes `"EIGEN1"`.
2. **Longest Word**: Find the longest word in a sentence. If multiple words have the same length, any one of them can be returned.
3. **Word Frequency**: Count the frequency of words in a list based on a query list.
4. **Matrix Diagonal Difference**: Calculate the difference between the sums of the diagonals in an NxN matrix.

## License

This project is licensed under the MIT License.
```

Ganti `YOUR_USERNAME` dengan username GitHub kamu. Setelah itu, simpan file ini sebagai `README.md` di root directory dari project kamu.
