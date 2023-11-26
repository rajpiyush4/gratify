'use server'

import Challenge from "@/models/challenges"

// Sample data for populating the challenges collection
const challenges = [
    {
        description: "Create and share a positive affirmation for yourself and others. Encourage a mindset of self-love and positivity.",

    },
    {
        description: 'Share a book recommendation that has inspired or influenced you. Encourage others to discover new reads.'

    },
    {
        description: 'Share a specific moment from your day for which you are grateful. It could be a person, an event, or even a small achievement.'
    },
    {
        description: 'Perform a random act of kindness for someone today. It could be helping a neighbor, complimenting a colleague, or doing something nice for a stranger.'
    },
    {
        description: 'Spend time outdoors and appreciate the beauty of nature. Share a photo or description of a natural scene that brings you joy.'
    },
    {
        description: 'Reflect on your day and write down your thoughts and feelings. It could be a journal entry, a poem, or a short story.'
    }

];

export const populateChallenges = async () => {
    try {

        const a = await Challenge.deleteMany();
        const startDate = new Date();

        const challengesData = Array.from({ length: 6 }, (_, index) => {
            const date = new Date(startDate.getTime() + index * 24 * 60 * 60 * 1000);


            return {
                description: `${challenges[index].description}`,
                date: date
            };
        });


        await Challenge.insertMany(challengesData);

        console.log('Challenges populated successfully.');
    } catch (error) {
        console.error('Error populating challenges:', error);
    }
};

export const getDailyChallenge = async () => {
    const currentDate = new Date()

    try {
        const allChallenges = await Challenge.find();

        const filteredChallenges = allChallenges.filter(challenge => {
            const challengeDate = new Date(challenge.date);

            return (
                challengeDate.getFullYear() === currentDate.getFullYear() &&
                challengeDate.getMonth() === currentDate.getMonth() &&
                challengeDate.getDate() === currentDate.getDate()
            );
        });

        return filteredChallenges.length > 0 ? filteredChallenges[0] : null;

    } catch (error) {
        console.error('Error fetching daily challenge:', error);
        return null;
    }
};