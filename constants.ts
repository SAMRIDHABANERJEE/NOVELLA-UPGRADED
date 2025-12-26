import { Book } from './types';

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'The Alchemist\'s Secret',
    author: 'Elara Vance',
    coverImage: 'https://picsum.photos/id/10/256/384', // Changed from Unsplash
    synopsis: 'In a world where magic intertwines with science, a young alchemist discovers a secret that could either save humanity or plunge it into eternal darkness. A journey through ancient ruins and modern marvels awaits.',
    sampleContent: `The scent of old parchment and forgotten spells hung heavy in Elara's laboratory, a familiar comfort that had been her constant companion since childhood. Dust motes danced in the lone shaft of moonlight piercing the high window, illuminating a chaotic array of bubbling beakers, intricate astrolabes, and ancient texts bound in leather so worn it felt like velvet. Tonight, however, the air thrummed with a different energy, a subtle vibration that hinted at something momentous on the precipice of discovery. She carefully poured a viscous, luminescent liquid into a crucible, her breath held, her eyes fixed on the swirling emerald hues. This was it, the culmination of years of tireless research, the key to unlocking the enigmatic "Essence of Aether" – a substance whispered about in hushed tones, capable of transmuting not just lead into gold, but reality itself. A faint hum began, growing in intensity, and the liquid in the crucible began to glow with an inner fire, casting dancing shadows on the walls. Elara leaned closer, a mixture of awe and trepidation gripping her heart. The secret was within reach.`,
    reviews: [
      {
        reviewerName: 'Alice Johnson',
        rating: 5,
        comment: 'Absolutely captivating! The world-building is phenomenal, and the characters are so engaging. A must-read for fantasy lovers.',
      },
      {
        reviewerName: 'Bob Williams',
        rating: 4,
        comment: 'A solid read with a unique blend of genres. The pacing was a bit slow in the middle, but the ending made it all worthwhile.',
      },
      {
        reviewerName: 'Charlie Brown',
        rating: 5,
        comment: 'One of the best books I\'ve read this year! Couldn\'t put it down.',
      },
    ],
  },
  {
    id: '2',
    title: 'Echoes in the Void',
    author: 'Kaelen Thorne',
    coverImage: 'https://picsum.photos/id/20/256/384', // Changed from Unsplash
    synopsis: 'A lone starship captain, haunted by the loss of his crew, picks up a mysterious signal from an uncharted nebula. What he finds there challenges the very fabric of reality and his understanding of the universe.',
    sampleContent: `Captain Jax Darian stared out at the swirling canvas of the Proxima Nebula, its iridescent gases painting abstract art against the inky black. Solitude was a cruel companion in the vast emptiness of space, a constant reminder of the 'Stardust' and the crew he'd lost to the void. Three cycles now, he'd drifted, a ghost ship piloted by a ghost of a man. Then, the anomaly. A faint, rhythmic pulse, not of natural origin, blossomed on his ancient sensors. It was too precise, too structured to be a cosmic fluke. His hand, calloused from years on the helm, hovered over the comms panel. "Computer," he murmured, his voice raspy from disuse. "Trace source. Origin unknown." The ship's AI, a sardonic construct named 'Orion', responded with a dry, synthesized chuckle. "Captain, my algorithms indicate a 99.7% probability of extreme navigational hazards. Proceeding would be... illogical." Jax merely gripped the armrest tighter. Illogical was his middle name. He had to know.`,
    reviews: [
      {
        reviewerName: 'David Lee',
        rating: 4,
        comment: 'Intriguing sci-fi with philosophical depth. Kept me thinking long after I finished it.',
      },
      {
        reviewerName: 'Eve Davis',
        rating: 3,
        comment: 'Good concept, but some parts felt rushed. The alien contact was well-done though.',
      },
      {
        reviewerName: 'Frank White',
        rating: 5,
        comment: 'A true masterpiece of science fiction! The ending was mind-blowing.',
      },
    ],
  },
  {
    id: '3',
    title: 'The Silent Garden',
    author: 'Isabelle Dubois',
    coverImage: 'https://picsum.photos/id/30/256/384', // Changed from Unsplash
    synopsis: 'In a forgotten manor house, a young historian uncovers a hidden garden that blossoms only under the moonlight. As she delves into its secrets, she discovers a tragic love story spanning centuries.',
    sampleContent: `The wrought-iron gates, rusted and entwined with ancient ivy, groaned a protest as Dr. Clara Thorne pushed them open. Blackwood Manor stood before her, a silhouette against the bruised twilight sky, its gothic spires reaching like skeletal fingers. Her assignment: to catalogue the estate's sprawling, untamed grounds, rumored to hold a lost horticultural wonder. The maps in the dusty archives had hinted at it – "Hortus Lunaris" – a garden said to bloom only under the moon's silvery gaze. Following a barely discernible path, Clara ventured deeper into the overgrown wilderness. Twisted rose bushes, their thorns like sharpened teeth, guarded secrets long buried. Just as despair threatened to set in, a faint, sweet fragrance, unlike any she had ever known, drifted on the evening air. Parting a curtain of weeping willow branches, she gasped. Before her lay a clearing, bathed in the nascent moonlight, where flowers of impossible luminescence unfurled their petals, glowing with an ethereal light. It was real. The Silent Garden.`,
    reviews: [
      {
        reviewerName: 'Grace Kim',
        rating: 5,
        comment: 'Beautifully written and incredibly moving. A poignant romance with a touch of mystery.',
      },
      {
        reviewerName: 'Henry Wilson',
        rating: 4,
        comment: 'Charming and atmospheric. Perfect for a cozy evening read.',
      },
      {
        reviewerName: 'Ivy Stone',
        rating: 4,
        comment: 'Loved the historical elements and the evocative descriptions. A very touching story.',
      },
    ],
  },
  {
    id: '4',
    title: 'Chronicles of the Ember Coast',
    author: 'Jian Li',
    coverImage: 'https://picsum.photos/id/40/256/384', // Changed from Unsplash
    synopsis: 'An epic fantasy saga about warring kingdoms, ancient prophecies, and a young warrior destined to unite a fractured land. Full of dragons, magic, and political intrigue.',
    // Add missing sampleContent property
    sampleContent: `The wind howled its ancient song across the Ember Coast, carrying the tang of salt and the scent of ash from the distant volcanic peaks. Kaelen, his face weathered beyond his eighteen years, tightened the grip on his sword hilt. Below him, the armies of the Sunken Isles clashed with the crimson banners of the Dragon Keep, a tide of steel and magic consuming the pristine sands. This was the destiny he had been told since birth: to stand between the warring factions, to be the shield and the spear of a fractured land. The prophecies spoke of a warrior, born of two bloodlines, who would wield the Ember Blade and bring peace or utter destruction. He looked at the blade, its obsidian surface shimmering with an internal fire, a relic passed down through generations. A roar echoed from the sky, a leathery shadow passing overhead – a dragon, unleashed by the Dragon Keep. Kaelen took a deep breath, the weight of a kingdom resting on his young shoulders. The chronicles would remember this day.`,
    reviews: [
      {
        reviewerName: 'Karen Green',
        rating: 5,
        comment: 'Epic! The world-building is rich, and the battles are thrilling. Can\'t wait for the next book!',
      },
      {
        reviewerName: 'Liam Miller',
        rating: 4,
        comment: 'A strong start to a promising series. A bit dense at times, but rewarding.',
      },
      {
        reviewerName: 'Mia Chen',
        rating: 5,
        comment: 'Everything I love in fantasy! Complex characters and a grand adventure.',
      },
    ],
  },
];