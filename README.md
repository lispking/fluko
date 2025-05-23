# Fluko - Intelligent Meme Token Generation Platform

An intelligent Meme token generation and analysis platform based on Fluxus Stream Processing Engine and Sui blockchain.

## Project Structure

```
├── contracts/           # Sui Move Smart Contracts
│   ├── sources/         # Contract Source Code
│   │   ├── meme_token.move    # Meme Token Contract
│   │   └── meme_generator.move # Token Generator Contract
│   └── Move.toml        # Move Package Configuration
├── frontend/           # Next.js Frontend Application
│   ├── src/            # Source Code
│   │   ├── app/        # Next.js Pages
│   │   ├── components/ # React Components
│   │   └── utils/      # Utility Functions
│   └── public/         # Static Assets
└── README.md
```

## Smart Contracts

### Meme Token Contract (meme_token.move)

Implements basic token functionalities:
- Token initialization
- Minting functionality
- Batch minting
- Token burning

### Meme Generator Contract (meme_generator.move)

Implements data-driven token generation features:
- Create token generator
- Update analytics data
- Calculate optimal token parameters
- Query generator information

## Frontend Development

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager
- Sui Wallet browser extension

### Setup Frontend

1. Install dependencies
```bash
cd frontend
npm install
# or
yarn install
```

2. Configure environment variables
```bash
cp .env.example .env.local
```
Update the environment variables in `.env.local` with your configuration.

3. Start development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
# or
yarn build
```

## Smart Contract Deployment

1. Install Sui CLI
```bash
cargo install --git https://github.com/Mystenlabs/suiup.git --locked
suiup install sui
```

2. Compile Contracts
```bash
sui move build
```

3. Deploy Contracts
```bash
sui client publish
```

## Features

- Real-time analytics integration
- Meme token generation based on market trends
- Interactive dashboard for token management
- Secure wallet integration
- Analytics-driven token parameters
- Community engagement metrics

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
