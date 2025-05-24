# Fluko - AI-Powered Meme Token Generation Platform

A next-generation meme token generation and analysis platform powered by AI and built on the Sui blockchain.

## Project Structure

```
├── contracts/           # Sui Move Smart Contracts
│   ├── sources/         # Contract Source Code
│   │   ├── meme_token.move    # Meme Token Contract
│   │   └── meme_generator.move # Token Generator Contract
│   └── Move.toml        # Move Package Configuration
├── frontend/           # Next.js Frontend Application with NextUI
│   ├── src/            # Source Code
│   │   ├── app/        # Next.js App Router Pages
│   │   ├── components/ # React Components
│   │   └── utils/      # Utility Functions
│   └── public/         # Static Assets
└── README.md
```

## Smart Contracts

### Meme Token Contract (meme_token.move)

Implements enhanced token functionalities:
- Token initialization with metadata
- Advanced minting mechanisms
- Batch minting with analytics
- Token burning with market impact analysis

### Meme Generator Contract (meme_generator.move)

Implements AI-driven token generation features:
- Create customizable token generators
- Real-time analytics integration
- Market trend analysis
- Performance metrics tracking

## Frontend Development

### Prerequisites

- Node.js 18.x or later
- pnpm package manager
- Sui Wallet browser extension

### Setup Frontend

1. Install dependencies
```bash
cd frontend
pnpm install
```

2. Configure environment variables
```bash
cp .env.example .env.local
```
Update the environment variables in `.env.local` with your configuration.

3. Start development server
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
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

- AI-powered token generation
- Real-time market analytics
- Trend-based parameter optimization
- Interactive modern UI with NextUI
- Secure wallet integration
- Community engagement metrics
- Performance analytics dashboard

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.
