

<div align="center">

## ⚠️ Attention

</div>
There are just two routes as specified in the task: `/dashboard` and `/auth`.

- If you head to `/`, you will get a **404 error**.
- If you are **logged in**:
  - ✅ You can access `/dashboard`
  - ❌ `/auth` is blocked
  - If you want access again to `/auth` delete the cookies...
- If you are **not logged in**:
  - ✅ You can access `/auth`
  - ❌ `/dashboard` is blocked

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

`deca-task` is a task designed by decamond.

This project is hosted on [GitHub](https://github.com/Aghaei-Dev/deca-task) and is open for contributions from the community.

it has `storybook` so feel free to have a look at it.

---

## Installation

Follow these steps to set up `deca-task` locally on your machine.

### Prerequisites

- have a look at `./package.json`

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Aghaei-Dev/deca-task.git
   cd deca-task
   ```

2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the necessary environment variables (e.g., API keys, database URLs). Refer to the `.env.example` file for guidance.

   ```bash
   cp .env.example .env
   ```

4. **Run the Application**

   Start the development server:

   ```bash
   npm run dev
   ```

   Or with Yarn:

   ```bash
   yarn dev
   ```

   The application will be available at `http://localhost:3000` (or the port specified in your configuration).

---

## Configuration

You can customize `deca-task` by modifying the configuration files:

- **Environment Variables**: Update the `.env` file to configure database connections, API endpoints, or other settings.
- **Theme Customization**: Modify the `src/assets/styles/global.scss` file to adjust colors, fonts, and other UI elements.

For advanced configuration, check the [Configuration Guide](docs/configuration.md).

---

## Contributing

We welcome contributions from the community! To contribute to `deca-task`, follow these steps:

1. **Fork the Repository**

   Click the "Fork" button on the [GitHub repository](https://github.com/Aghaei-Dev/deca-task) to create your own copy.

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add your feature description"
   ```

4. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**

   Submit a pull request to the main repository with a clear description of your changes.

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions, suggestions, or issues, please reach out:

- **GitHub Issues**: [https://github.com/Aghaei-Dev/deca-task/issues](https://github.com/Aghaei-Dev/deca-task/issues)
- **Email**: aghaei.dev@gmail.com
- **telegram**: [@Aghaei-Dev](https://t.me/Aghaei-Dev)

Thank you for using `deca-task`! We hope it helps you stay organized and productive.
