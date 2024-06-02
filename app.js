function getComputeMove()
{
    let number = Math.floor((Math.random() *3) + 1);
    switch(number)
    {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}