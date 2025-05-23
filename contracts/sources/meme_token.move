module fluxus_meme::meme_token;

use sui::coin::{Self, Coin, TreasuryCap};
use sui::url;

public struct MEME_TOKEN has drop {}

fun init(witness: MEME_TOKEN, ctx: &mut TxContext) {
    let (treasury, metadata) = coin::create_currency(
        witness,
        9,
        b"FLUKO",
        b"Fluko",
        b"Fluxus Meme Token - Powered by Real-time Analytics",
        option::some(url::new_unsafe_from_bytes(b"https://raw.githubusercontent.com/lispking/fluxus/refs/heads/develop/docs/images/fluxus-logo.png")),
        ctx
    );

    transfer::public_transfer(treasury, tx_context::sender(ctx));
    transfer::public_transfer(metadata, tx_context::sender(ctx));
}

public entry fun mint(
    treasury_cap: &mut TreasuryCap<MEME_TOKEN>,
    amount: u64,
    recipient: address,
    ctx: &mut TxContext
) {
    let coin = coin::mint(treasury_cap, amount, ctx);
    transfer::public_transfer(coin, recipient);
}

public entry fun batch_mint(
    treasury_cap: &mut TreasuryCap<MEME_TOKEN>,
    amounts: vector<u64>,
    recipients: vector<address>,
    ctx: &mut TxContext
) {
    let mut i = 0;
    let amounts_length = vector::length(&amounts);
    assert!(amounts_length == vector::length(&recipients), 0);
    
    while (i < amounts_length) {
        let amount = *vector::borrow(&amounts, i);
        let recipient = *vector::borrow(&recipients, i);
        mint(treasury_cap, amount, recipient, ctx);
        i = i + 1;
    }
}

public entry fun burn(
    treasury_cap: &mut TreasuryCap<MEME_TOKEN>,
    coin: Coin<MEME_TOKEN>
) {
    coin::burn(treasury_cap, coin);
}
