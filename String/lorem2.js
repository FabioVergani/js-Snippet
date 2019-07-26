				const generateDummyText=(a=40,b=1)=>{//max,min
					let i=Math,j=i.max;
					const m=[
						"Tincidunt id aliquet risus feugiat in.",
						"Nisi vitae suscipit tellus mauris a. Tortor id aliquet lectus proin.",
						"Nisl nunc mi ipsum faucibus vitae.",
						"Eu facilisis sed odio morbi quis.",
						"Ut eu sem integer vitae justo eget magna.",
						"Gravida rutrum quisque non tellus orci ac auctor.",
						"Sit amet volutpat consequat mauris nunc congue nisi vitae.",
						"You bred raptors?",
						"Id cursus metus aliquam eleifend mi in nulla",
						"Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a.",
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
						"Elit duis tristique sollicitudin nibh sit. Tincidunt augue interdum velit euismod in.",
						"He's gonna eat the goat?",
						"Dinosaurs eat man; woman inherits the earth.",
						"Mi sit amet mauris commodo quis imperdiet massa tincidunt.",
						"Malesuada fames ac turpis egestas sed. Id porta nibh venenatis cras.",
						"I really hate that man.",
						"Nibh cras pulvinar mattis nunc sed. Massa sapien faucibus et molestie.",
						"That is one big pile of shit.",
						"Why didn't I build it in Orlando?",
						"Check the vending machines.",
						"Sed blandit libero volutpat sed. Dignissim enim sit amet venenatis urna cursus eget.",
						"When you gotta go, you gotta go.",
						"Boy, do I hate being right all the time.",
						"Ian, freeze!",
						"Well, at least you're out of the tree.",
						"I hate this hacker crap!",
						"Remind me to thank John for the wonderful weekend.",
						"Must go faster!",
						"Bloody move!",
						"Elementum pulvinar etiam non quam lacus.",
						"What about the lysine contingency?",
						"Dr. Wu inserted a gene that makes a single faulty enzyme in protein metabolism.",
						"Uh uh uh!...You didn't say the magic word!",
						"Hold onto your butts.",
						"I can afford more glasses!",
						"I thought you were one of your big brothers.",
						"I'm gonna run you over when I come back down!",
						"Amphibian DNA.",
						"Look at all the blood.",
						"We spared no expense.",
						"Because we're being hunted.",
						"Clever girl.",
						"It's gonna come through the glass!"
					],
					l=m.length,
					r=i.random,
					f=i.floor,
					s=[];
					//
					i=f(j(a,j(1,b)));
					j=0;
					do{
						const n=r();
						let v=f(n*l)+1;
						if(v===j){v=v<l?++v:--v};
						v=m[j=v];
						if(i>2){v=v+(n<.2?v+'\n':'\u0020')};
						s.push(v)
					}while(--i);
					return s.join('')
				};
				document.body.style.whiteSpace='pre';
				//document.write('\n----generateDummyText()');
				document.write("|"+generateDummyText()+"|");

				//document.write('\n----generateDummyText(2)');
				document.write("|"+generateDummyText(2)+"|");

				//document.write('\n----generateDummyText(2,6)');
				document.write("|"+generateDummyText(2,6)+"|");

				//document.write('\n----generateDummyText(2,2)');
				document.write("|"+generateDummyText(2,2)+"|");

				
				
				
				
				
				
