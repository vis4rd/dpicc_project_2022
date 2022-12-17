export const music = () => {
    const genres = [
        "pop",
        "classical",
        "rock",
        "indie",
        "house",
        "rap",
        "hip-hop",
        "lo-fi",
        "dubstep",
        "trap",
        "alternative",
        "disco",
        "jazz",
        "ambience",
        "electronic",
        "acoustic",
        "country",
        "metal",
    ];
    const tempos = ["rapid", "fast", "moderate", "slow", "very slow"];
    const moods = ["happy", "sad", "energetic", "melancholic", "neutral", "rythmic"];
    const environments = [
        "home",
        "party",
        "traffic",
        "cafe",
        "restaurant",
        "nature",
        "work",
        "gym",
        "industrial",
    ];
    const types = ["instrumental", "vocal"];
    const fullnesses = [
        "cacaphonous",
        "full",
        "above average",
        "average",
        "below average",
        "frugal",
        "silent",
    ];

    return { genres, tempos, moods, environments, types, fullnesses };
};
