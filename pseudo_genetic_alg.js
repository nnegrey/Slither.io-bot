// Tutorial I found: https://www.tutorialspoint.com/genetic_algorithms/index.htm
// 1. Generate a random population of size n (we'll do 1000)
population = [1000][56];

// Generate 1000 55 bit strings of 0s or 1s.
for (i = 0; i < 1000; i++) {
   for (var j = 0; j < 55; j++) {
      num = Math.floor(Math.random()*(1-0+1)+0);
      population[i][j] = (char) num;
   }
   population[i][j] = '\0';
}

// 2. Store these strings into the DB indexed by 0-1000
// 3. Server maintains index into population, start at 0.
// 4. The web browsers request a chromosome string from the server
// 5. Server responds with current index and chromosome (increment index)
// 6. Bot runs chromosome.
// 7. Bot pushes index, chromosome, and score to server. 
// 8. Server stores info.
// 9. Once every chromosome has a fitness score
// 9a. Get sum of all scores from DB.
// 9b. create new temp population of size 1000.
population = [1000][56];
for (i = 0; i < 1000; i++) {
   // 9c. Choose a random number between 0 and the sum of scores
   random_num_1 = Math.floor(Math.random()*(population_sum-0+population_sum)+0);
   random_num_2 = Math.floor(Math.random()*(population_sum-0+population_sum)+0);
   
   // 9d. Get parent chromosomes.
   parent_1_index = 0;
   while (random_num_1 < population_sum) {
      random_num_1 += score at index parent_1_index; // From the DB retrieve the fitness score of the chromosome at index: parent_1_index
      parent_1_index += 1;
   }
   parent_2_index = 0;
   while (random_num_2 < population_sum) {
      random_num_2 += score at index parent_2_index; // From the DB retrieve the fitness score of the chromosome at index: parent_2_index
      parent_2_index += 1;
   }

   // 9e. Get the Parents
   parent_1 = chromosome from DB at (parent_1_index-1);
   parent_2 = chromosome from DB at (parent_2_index-1);

   // 10. Crossover Point between 0-54
   crossover_pt = Math.floor(Math.random()*(54-0+54)+0);
   chromosome = parent_1.substring(0, crossover_pt) + parent_2.substring(crossover_pt, 55);

   // 11. Mutation (Chance of mutation 1%)
   for (j = 0; j < 55; j++) {
      if (Math.floor(Math.random()*(100-0+100)+0) == 0) {
         // Flip 0 to 1
         // or
         // Flip 1 to 0
      }
   }

   // 12. Store Chromosome in temp population 
   population[i] = chromosome;
}

// 13. Store population in DB by index and reset scores.
// 14. Set global index to 0 and repeat.