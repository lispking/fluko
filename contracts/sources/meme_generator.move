module fluxus_meme::meme_generator;

use std::string::{Self, String};

const ERROR_UNAUTHORIZED: u64 = 1;

public struct MemeGenerator has key {
    id: UID,
    owner: address,
    name: String,
    description: String,
    trend_score: u64,
    social_impact: u64,
    market_potential: u64,
}

public entry fun create_generator(
    name: vector<u8>,
    description: vector<u8>,
    ctx: &mut TxContext
) {
    let generator = MemeGenerator {
        id: object::new(ctx),
        owner: tx_context::sender(ctx),
        name: string::utf8(name),
        description: string::utf8(description),
        trend_score: 0,
        social_impact: 0,
        market_potential: 0
    };

    transfer::share_object(generator);
}

public entry fun update_analytics(
    generator: &mut MemeGenerator,
    trend_score: u64,
    social_impact: u64,
    market_potential: u64,
    ctx: &TxContext
) {
    assert!(generator.owner == tx_context::sender(ctx), ERROR_UNAUTHORIZED);
    
    generator.trend_score = trend_score;
    generator.social_impact = social_impact;
    generator.market_potential = market_potential;
}

public fun calculate_token_params(generator: &MemeGenerator): (u64, u64) {
    let total_score = generator.trend_score + generator.social_impact + generator.market_potential;
    
    let initial_supply = if (total_score > 80) {
        1_000_000_000 // High potential project
    } else if (total_score > 50) {
        100_000_000 // Medium potential project
    } else {
        10_000_000 // Low potential project
    };

    let community_ratio = if (generator.social_impact > 70) {
        70 // Community-oriented
    } else if (generator.social_impact > 40) {
        50 // Balanced
    } else {
        30 // Team-oriented
    };

    (initial_supply, community_ratio)
}

public fun get_generator_info(generator: &MemeGenerator): (String, String, u64, u64, u64) {
    (
        generator.name,
        generator.description,
        generator.trend_score,
        generator.social_impact,
        generator.market_potential
    )
}
