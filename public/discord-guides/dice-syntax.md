# Dice Notation 
This comes straight from the github repo for the Dart Dice Parser--full credit goes tot he author. 
## Examples: 
2d20 #cf #cs

roll 2d20, result will include counts of critical successes (20) and failures (1)
### advantage

2d20-L -- drop lowest
2d20k, 2d20kh -- keep highest
### disadvantage

2d20-H -- drop highest
2d20-kl -- keep lowest
(2d10+3d20)-L3 -- roll 2d10 and 3d20, combine the two results lists, and drop lowest 3 results

20d10-<3->8# -- roll 20 d10, drop any less than 3 or greater than 8 and count the number of remaining dice

## Supported notation 
2d6 -- roll 2 dice of 6 sides

### special dice variations:

4dF -- roll 4 fudge dice (sides: [-1, -1, 0, 0, 1, 1])
1d% -- roll 1 percentile dice (equivalent to 1d100)
1D66 -- roll 1 D66, aka 1d6*10 + 1d6
NOTE: you must use uppercase D66, lowercase d66 will be interpreted as a 66-sided die
2d[2,3,5,7]-- roll 2 dice with values [2,3,5,7]
### exploding dice

4d6! -- roll 4 6-sided dice, explode if max (6) is rolled (re-roll and include in results)
4d6 !=5 or 4d6!5 -- explode a roll if equal to 5
4d6 !>=4 - explode if >= 4
4d6 !<=2 - explode if <=2
4d6 !>5 - explode if > 5
4d6 !<2 - explode if <2
To explode only once, use syntax !o
4d6 !o<5
compounding dice (Shadowrun, L5R, etc). Similar to exploding, but the additional rolls for each dice are added together as a single "roll". The original roll is replaced by the sum of it and any additional rolls.

5d6 !! -- roll 5 6-sided dice, compound
5d6 !!=5 or 5d6!5 -- compound a roll if equal to 5
5d6 !!>=4 - compound if >= 4
5d6 !!<=4 - compound if <= 4
5d6 !!>5 - compound if > 5
5d6 !!<3 - compound if < 3
To compound only once, use syntax !!o
5d6 !!o<2
### re-rolling dice:

4d4 r2 -- roll 4d4, re-roll any result = 2
4d4 r=2 -- roll 4d4, re-roll any result = 2
4d4 r<=2 -- roll 4d4, re-roll any <= 2
4d4 r>=3 -- roll 4d4, re-roll any >= 3
4d4 r<2 -- roll 4d4, re-roll any < 2
4d4 r>3 -- roll 4d4, re-roll any > 3
To reroll only once, use syntax ro
4d4 ro<2
### keeping dice:

3d20 k 2 -- roll 3d20, keep 2 highest
3d20 kh 2 -- roll 3d20, keep 2 highest
3d20 kl 2 -- roll 3d20, keep 2 lowest
### dropping dice:

4d6 -H -- roll 4d6, drop 1 highest
4d6 -L -- roll 4d6, drop 1 lowest
4d6 -H2 -- roll 4d6, drop 2 highest
4d6 -L2 -- roll 4d6, drop 2 lowest
4d6 ->5 -- roll 4d6, drop any results > 5
4d6 -<2 -- roll 4d6, drop any results < 2
4d6 ->=5 -- roll 4d6, drop any results >= 5
4d6 -<=2 -- roll 4d6, drop any results <= 2
4d6 -=1 -- roll 4d6, drop any results equal to 1
NOTE: the drop operators have higher precedence than the arithmetic operators; 4d10-L2+2 is equivalent to (4d10-L2)+2
NOTE: drop is not subtraction.
4d6 - 3 -- roll 4d6, subtract 3
4d6 - 2d6 -- roll 4d6, subtract the result of rolling 2d6
cap/clamp:

4d20 C<5 -- roll 4d20, change any value < 5 to 5
4d20 C>15 -- roll 4d20, change any value > 15 to 15
scoring dice rolls:

### counting:
4d6 # -- how many results?
For example, you might use this to count # of dice above a target. (5d10 -<6)# -- roll 5 d10, drop any less than 6, count results
4d6 #>3 -- roll 4d6, count any > 3
4d6 #<3 -- roll 4d6, count any < 3
4d6 #>=5 -- roll 4d6, count any >= 5
4d6 #<=2 -- roll 4d6, count any <= 2
4d6 #=5 -- roll 4d6, count any equal to 5
### successes and failures
A normal count operation # discards the rolled dice and changes the result to be the count
For example, 2d6#<=3 rolls [3,4] then counts which results are <=3 , returning [1]
But, sometimes you want to be able to count successes/failures without discarding the dice rolls. In this case, use modifiers #s, #f, #cs, #cf to add metadata to the results.
6d6 #f<=2 #s>=5 #cs6 #cf1 -- roll 6d6, count results <= 2 as failures, >= 5 as successes, =6 as critical successes, =1 as critical failures
The above returns a result like: RollSummary(total: 22, results: [6, 2, 1, 5, 3, 5], metadata: {rolled: [6, 2, 1, 5, 3, 5], score: {successes: [6, 5, 5], failures: [2, 1], critSuccesses: [6], critFailures: [1]}})
NOTE: order matters
2d20 kh #cf #cs -- roll 2d20, keep the highest, count critical successes & failures. If this rolled [1,18], the 1 is dropped and the result metadata won't record a critical failure. If that's not the behavior you want, move the counts prior to the drop (2d20 #cf #cs kh).
### arithmetic operations

parenthesis to force a certain order of operations
addition is a little special -- could be a sum of ints, or it can be used to aggregate results of multiple dice rolls
Addition of integers is the usual sum
4+5
2d6 + 1
Addition of roll results combines the results (use parens to ensure the order of operations is what you desire)
(5d6+5d10)-L2 -- roll 5d6 and 5d10, and from aggregate results drop the lowest 2.
5d6+5d10-L2 -- roll 5d6 and 5d10, and from only the 5d10 results drop the lowest 2. equivalent to 5d6+(5d10-L2)
* for multiplication
- for subtraction
numbers must be integers
division is not supported.

---

Source / credit

- Adapted verbatim from Adventuresmith’s dart_dice_parser docs: https://pub.dev/packages/dart_dice_parser
