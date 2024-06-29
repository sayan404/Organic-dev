import { NextRequest, NextResponse } from 'next/server';
import { handleError } from '@/src/lib/utils';
import dbConnect from '@/src/config/dbConfig';
import { matchOrgans } from '@/src/lib/utils';

// gemini api = AIzaSyB8a7KZ9yRlLCi0OF54x3gSChWqhM7pvM8
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB4DolawuSc0QEhkiKTh3XVPOkRu3RrIhw`;
//prompt
const prompt = `we have two text(data-1 is the data of required organ for transplat and data-2 is the data of existing organ donated by a donor and stored
at a organ bank) data about a type of organ's(any organ that could be donated by a organ donor an are eligibile for a transplat) 
health conditions or parameters required for examine the potential match between the organ banks organs data with the organ which is requested
by a hospital for a transplat. your role is an expert doctor who can analyse both the datas(data-1 and data-2) and depending upon the entire 
data and parameters(there could be different parameter for a organ like heart or kidney and so on like weight, size, etc) you need to give potential match
percentage(only number between 0 to 100 not the '%' sign) of the commparison of both of the data.
take data-2 as a base and compare it with the data-1 and give the the desired result as instructed. give the match percentage only of two data `;

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const matchPercentageList: string[] = [];
    const potentialOrgans: any[] = [];

    const { organsList, organToBeMatched } = await req.json();

    organsList.forEach(async (organ: { organId: string; desc: string }) => {
      const response: string =
        (await matchOrgans(url, prompt, organ.desc, organToBeMatched.desc)) ||
        '0';
      //store match percentages
      matchPercentageList.push(response);
    });

    //get the index of the organs with match greater than 60%
    matchPercentageList.forEach((percentage) => {
      parseInt(percentage) > 60 &&
        potentialOrgans.push(organsList[parseInt(percentage)]);
    });

    //return the organid's of the potential matches
    return NextResponse.json(
      {
        potentialOrgans,
      },
      { status: 201 }
    );
  } catch (e) {
    handleError(e);
  }
}
