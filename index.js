import fetch from 'node-fetch';
import clipboardy from 'clipboardy';

// const response = await fetch('https://api.github.com/users/github');
// const data = await response.json();

// console.log(data);

async function FetchMessages()
{

    const bearerToken = "Bearer EwB4A8l6BAAUkj1NuJYtTVha+Mogk+HEiPbQo04AAcpgMp11Ym6NSSUyo+CBPc+IcT1rwTDcIs0+TRq6wxy4nGRKoSQFluPAf3C8stvJ1tLBOUT+FTdbTabNtGbRN8r1cCUpOqHVKtdfYwv9AmPYwIHqVdVdaiUtpb8Pf5qN7HRtdh7rccVA/Pbat14Q2u3HdjNgTxkVg3+SyBAQPj5VbOhDuETuUhBZ0ldGTYUAz8NvQVcZbxmm4+hrHY4wkFlCQjgDzYRfLEP6cxgcBUZVyJb5ElDHyc0+XDgTHeH1pudKJbvMmws5s4kaoOKNkwtTPYesg5P6/EH9K/0K5W5WItc2GRp8SJW5SDc9HKBKZqDosGwAsx6CuLMpQoo+uYADZgAACEx7/O60YDJmSAJMe73OQI5EbT6vKmpOI2ibW7N43D9Dkke88gqstL1J2W6UFq/XeErlgvXZ4gsGD0ZWPk9CPct1yqgc4q7RW9cuEwsI+TukLFszMulfOf5WHRjNert5iuSocnC2CEQKndpDQAPSXbVzm9ziRFi/Acrqqb15wum69bKr8ADSTgRjnf0NmhnNzOKIu3Rg7ztbTKtcevMQpxGe3VRD/lRefAtrkNVoz53LQUIy0uteXxerJr77+dUREZqr3HD1mf/BaYgqT30q4Xx18hzWGML63HlM5hiay8HkduKAZyLeBW4nuBCw2ptBpM2Fq+4T9b2DOnXfurB2eWYChGGPbC+EoFHOj1hcTqUT5PyA+NYGctBQwRJLJn07S5cHMBb2JtHk8Y0iLrk/BmliDYjTHi/vy+/GcJw6dz/FQZvGwRaib1ogE1AqepaeGGznGOTv5mjCldACRy8xN0iDiN0+rampmkR5UF15kePSFwYyORSrH9ky/eayk0ynjBaxwCREcaprVYfuptZ4Bii6FRIJJl7stcTeqgB7yVvlePKepmh68/R69DUTTuNEM4WL/E0ZEY20bd36kP8FEUdRjJqO/kFSY7dFQmePsu3wrEQ6FvRk+E8Fk/8MLNBiX5CdP7z20+DQRlIlegtH0uD+E7OgQCkiOwDmjLo4D1aNeo3Ika92l5exnDblsCol1SjhiP6xFaNLQFYp9hHaKCMN7OQmYKcMp7BzNc4sP/iR4HrZXL0yNg+2/wrXFkctB9TvjzzOHz5SEBuy0CnhBzKEgoQC";

    let messages = [];

    await fetch("https://graph.microsoft.com/v1.0/me/messages", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "authorization": "Bearer EwB4A8l6BAAUkj1NuJYtTVha+Mogk+HEiPbQo04AAcpgMp11Ym6NSSUyo+CBPc+IcT1rwTDcIs0+TRq6wxy4nGRKoSQFluPAf3C8stvJ1tLBOUT+FTdbTabNtGbRN8r1cCUpOqHVKtdfYwv9AmPYwIHqVdVdaiUtpb8Pf5qN7HRtdh7rccVA/Pbat14Q2u3HdjNgTxkVg3+SyBAQPj5VbOhDuETuUhBZ0ldGTYUAz8NvQVcZbxmm4+hrHY4wkFlCQjgDzYRfLEP6cxgcBUZVyJb5ElDHyc0+XDgTHeH1pudKJbvMmws5s4kaoOKNkwtTPYesg5P6/EH9K/0K5W5WItc2GRp8SJW5SDc9HKBKZqDosGwAsx6CuLMpQoo+uYADZgAACEx7/O60YDJmSAJMe73OQI5EbT6vKmpOI2ibW7N43D9Dkke88gqstL1J2W6UFq/XeErlgvXZ4gsGD0ZWPk9CPct1yqgc4q7RW9cuEwsI+TukLFszMulfOf5WHRjNert5iuSocnC2CEQKndpDQAPSXbVzm9ziRFi/Acrqqb15wum69bKr8ADSTgRjnf0NmhnNzOKIu3Rg7ztbTKtcevMQpxGe3VRD/lRefAtrkNVoz53LQUIy0uteXxerJr77+dUREZqr3HD1mf/BaYgqT30q4Xx18hzWGML63HlM5hiay8HkduKAZyLeBW4nuBCw2ptBpM2Fq+4T9b2DOnXfurB2eWYChGGPbC+EoFHOj1hcTqUT5PyA+NYGctBQwRJLJn07S5cHMBb2JtHk8Y0iLrk/BmliDYjTHi/vy+/GcJw6dz/FQZvGwRaib1ogE1AqepaeGGznGOTv5mjCldACRy8xN0iDiN0+rampmkR5UF15kePSFwYyORSrH9ky/eayk0ynjBaxwCREcaprVYfuptZ4Bii6FRIJJl7stcTeqgB7yVvlePKepmh68/R69DUTTuNEM4WL/E0ZEY20bd36kP8FEUdRjJqO/kFSY7dFQmePsu3wrEQ6FvRk+E8Fk/8MLNBiX5CdP7z20+DQRlIlegtH0uD+E7OgQCkiOwDmjLo4D1aNeo3Ika92l5exnDblsCol1SjhiP6xFaNLQFYp9hHaKCMN7OQmYKcMp7BzNc4sP/iR4HrZXL0yNg+2/wrXFkctB9TvjzzOHz5SEBuy0CnhBzKEgoQC",
            "client-request-id": "a6c6ab04-e50e-303a-8c48-f02f1d2edac2",
            "sdkversion": "GraphExplorer/4.0, graph-js/3.0.2 (featureUsage=6)",
            "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "Referer": "https://developer.microsoft.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    }).then(response => response.json())
        .then(data =>
        {
            messages = data.value;
        })
        .catch((error) =>
        {
            console.error(error);
        });

    // let titles = messages.filter(message => message.subject.includes("Monzo") && !message.isRead).map(message => message.subject);

    // if (titles.)


    // //Get all the messages which have 
    let messagesNeeded = messages.filter(message => message.subject.includes("Log in to Monzo") && !message.isRead);
    // console.log(messagesNeeded.length);

    if (messagesNeeded?.length > 0)
    {
        //Do our best to get an email that looks like the one we want
        let url = messagesNeeded[0].body.content.match(/localhost:8080.*"/g)[0].replace(/"/g, "");

        //Trim URL after the ">" character as it returns lots of unnecessary crap
        url = url.substring(0, url.indexOf(">"));

        console.log(url);

        await clipboardy.write('butter');

    }

    // console.log(messagesNeeded);
}

FetchMessages();