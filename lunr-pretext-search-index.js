var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "instructions",
  "level": "1",
  "url": "instructions.html",
  "type": "Section",
  "number": "1",
  "title": "Instructions",
  "body": " Instructions  This worksheet covers basic logic concepts including propositional logic, truth tables, applications, and logical equivalences.  Show all work clearly. You may refer to your notes where appropriate.  "
},
{
  "id": "part1",
  "level": "1",
  "url": "part1.html",
  "type": "Section",
  "number": "2",
  "title": "Propositions and Connectives",
  "body": " Propositions and Connectives  A proposition is a statement that is either true or false, but not both. Questions below test whether a sentence qualifies as a proposition.   Determine whether each of the following is a proposition. If it is, state whether it is true or false.  The Eiffel Tower is in Paris.  Is it raining?   Close the door.    (a) Proposition, True (b) Not a proposition (c) Proposition, False (d) Not a proposition    Let : \"It is raining\", and : \"I will take an umbrella\". Translate the following statements into symbolic logic.  (a) (b) (c)    "
},
{
  "id": "part1-3",
  "level": "2",
  "url": "part1.html#part1-3",
  "type": "Checkpoint",
  "number": "2.1",
  "title": "",
  "body": " Determine whether each of the following is a proposition. If it is, state whether it is true or false.  The Eiffel Tower is in Paris.  Is it raining?   Close the door.    (a) Proposition, True (b) Not a proposition (c) Proposition, False (d) Not a proposition  "
},
{
  "id": "part1-4",
  "level": "2",
  "url": "part1.html#part1-4",
  "type": "Checkpoint",
  "number": "2.2",
  "title": "",
  "body": " Let : \"It is raining\", and : \"I will take an umbrella\". Translate the following statements into symbolic logic.  (a) (b) (c)   "
},
{
  "id": "truth-tables",
  "level": "1",
  "url": "truth-tables.html",
  "type": "Section",
  "number": "3",
  "title": "Truth Tables",
  "body": " Truth Tables  A truth table shows all possible truth values of a compound statement. Each row represents one possible combination of truth values for the variables.   Complete the truth table for the compound proposition: Follow these steps:  Compute  Compute  Combine results using            T T    T F    F T    F F     The final column evaluates to: F, T, F, F (so the statement is only true in the second row)    Construct truth tables for the following expressions and determine whether they are logically equivalent:      Yes, they are logically equivalent (De Morgan’s Law).   "
},
{
  "id": "truth-tables-3",
  "level": "2",
  "url": "truth-tables.html#truth-tables-3",
  "type": "Checkpoint",
  "number": "3.1",
  "title": "",
  "body": " Complete the truth table for the compound proposition: Follow these steps:  Compute  Compute  Combine results using            T T    T F    F T    F F     The final column evaluates to: F, T, F, F (so the statement is only true in the second row)  "
},
{
  "id": "truth-tables-4",
  "level": "2",
  "url": "truth-tables.html#truth-tables-4",
  "type": "Checkpoint",
  "number": "3.2",
  "title": "",
  "body": " Construct truth tables for the following expressions and determine whether they are logically equivalent:      Yes, they are logically equivalent (De Morgan’s Law).  "
},
{
  "id": "applications",
  "level": "1",
  "url": "applications.html",
  "type": "Section",
  "number": "4",
  "title": "Applications of Logic",
  "body": " Applications of Logic  In logic, we translate English statements into symbolic form using logical connectives such as (and), (or), and (if-then).   Translate into logical expressions:  If the alarm is set and the window is open, then the siren sounds. Let be the alarm is set, be the window is open, be the siren sounds.  If the power is out, then the lights are off or the generator is on. Let be the power is out, be the lights are off, be the generator is on.    (a) (b)    "
},
{
  "id": "applications-3",
  "level": "2",
  "url": "applications.html#applications-3",
  "type": "Checkpoint",
  "number": "4.1",
  "title": "",
  "body": " Translate into logical expressions:  If the alarm is set and the window is open, then the siren sounds. Let be the alarm is set, be the window is open, be the siren sounds.  If the power is out, then the lights are off or the generator is on. Let be the power is out, be the lights are off, be the generator is on.    (a) (b)   "
},
{
  "id": "arguments",
  "level": "1",
  "url": "arguments.html",
  "type": "Section",
  "number": "5",
  "title": "Logical Arguments",
  "body": " Logical Arguments  An argument is valid if the conclusion must be true whenever the premises are true. One common valid form is Modus Tollens .   Determine whether the argument is valid. Justify your answer. If I study, then I will pass the exam. I did not pass the exam. Therefore, I did not study. Let : I study, : I pass the exam.  This is valid by Modus Tollens.   "
},
{
  "id": "arguments-3",
  "level": "2",
  "url": "arguments.html#arguments-3",
  "type": "Checkpoint",
  "number": "5.1",
  "title": "",
  "body": " Determine whether the argument is valid. Justify your answer. If I study, then I will pass the exam. I did not pass the exam. Therefore, I did not study. Let : I study, : I pass the exam.  This is valid by Modus Tollens.  "
},
{
  "id": "equivalences",
  "level": "1",
  "url": "equivalences.html",
  "type": "Section",
  "number": "6",
  "title": "Logical Equivalence Proofs",
  "body": " Logical Equivalence Proofs  Two logical expressions are equivalent if they always have the same truth value. We use truth tables to verify equivalence.   Use truth tables to determine whether the following are logically equivalent:  and  and    Both are equivalent (De Morgan’s Law and implication rule).    Prove or disprove: using a truth table.   "
},
{
  "id": "equivalences-3",
  "level": "2",
  "url": "equivalences.html#equivalences-3",
  "type": "Checkpoint",
  "number": "6.1",
  "title": "",
  "body": " Use truth tables to determine whether the following are logically equivalent:  and  and    Both are equivalent (De Morgan’s Law and implication rule).  "
},
{
  "id": "equivalences-4",
  "level": "2",
  "url": "equivalences.html#equivalences-4",
  "type": "Checkpoint",
  "number": "6.2",
  "title": "",
  "body": " Prove or disprove: using a truth table.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
