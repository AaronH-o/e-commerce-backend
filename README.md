# e-commerce backend

## Description

This project is a functional Express.js API that utilizes Sequelize as an ORM to interact with a MySQL database. It provides endpoints for managing categories, products, and tags, allowing users to perform CRUD (Create, Read, Update, Delete) operations on the data.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create an environment variable file (`.env`) in the root directory of the project. Add the following environment variables:

   ```
   DB_NAME=<your-database-name>
   DB_USER=<your-mysql-username>
   DB_PASSWORD=<your-mysql-password>
   ```

5. Run the schema and seed commands to create a development database and seed it with test data:

   ```bash
   npm run seed
   ```

## Usage

Once the installation is complete, you can start the server using the following command:

```bash
npm start
```

This command will start the server and sync the Sequelize models with the MySQL database.

## API Routes

The API provides the following routes:

- **GET /categories**: Retrieve all categories with associated products.
- **GET /products**: Retrieve all products with associated category and tag data.
- **GET /tags**: Retrieve all tags with associated products.
- **POST /categories**: Create a new category.
- **POST /products**: Create a new product.
- **POST /tags**: Create a new tag.
- **PUT /categories/:id**: Update a category by ID.
- **PUT /products/:id**: Update a product by ID.
- **PUT /tags/:id**: Update a tag by ID.
- **DELETE /categories/:id**: Delete a category by ID.
- **DELETE /products/:id**: Delete a product by ID.
- **DELETE /tags/:id**: Delete a tag by ID.

## Testing

You can test the API endpoints using a tool like Insomnia Core. Make requests to the defined routes to interact with the data:

- Use GET routes to retrieve data.
- Use POST routes to create new data.
- Use PUT routes to update existing data.
- Use DELETE routes to delete data.

Ensure that you provide valid data in the request body as required by each route.

## Demo

A video demonstration of the API routes can be found [here](https://drive.google.com/file/d/1deNbOFyct-dFtOkICVWp0uECCbk78IuA/view?usp=sharing)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).