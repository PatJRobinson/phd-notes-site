
**EB**
EB: "so at first sight dds looks very much like mqtt or any other pepsi protocol but because they're also topics publishers subscribers etc but there are
2:562 minutes, 56 secondssome key differences and one is that it is focused on nowadays it's called edge computing
3:043 minutes, 4 secondsthe other is that it has more knowledge of the data type the data content than most of the other systems and that
3:133 minutes, 13 secondsthis additional knowledge allows you to do very evaluation or filtering in middleware and also to let the middleware handle
3:213 minutes, 21 secondsthe take over some of the responsibility for maintaining the data set and so you can even configure it to act like a simple distributed replicated relational"


railway infrastructure where the track control system switches semaphores reserving the
4:434 minutes, 43 secondsright of way for trains things like that completely relies on dds for communication across the system
4:514 minutes, 51 secondscold flight is a new european air traffic management system dds is used for example for distributing flight plan updates throughout the system enough
4:584 minutes, 58 secondscanada is similar um and in transportation there are of course also autonomous vehicles which are stuffed with sensors and real-time
Chapter 4: Autonomous Vehicles
5:075 minutes, 7 secondssharing and processing of this data is at the core of the system these feature quite some small smallish
5:155 minutes, 15 secondsnetworks of quite powerful ecu's and there are quite a few where dds is used to integrate these
5:245 minutes, 24 secondsin many cases these autonomous vehicles aren't directly written using dds they use what is called ros2 the robot operating
5:325 minutes, 32 secondssystem but that itself is based on dds i also see ross 2 is in
5:395 minutes, 39 secondsindustrial robotics um there is a whole group affiliated with the ros2 movement
5:465 minutes, 46 secondsdevelopment world um called ros industrial which is focused on support of roles in industrial robotics and so

**FM**

**TL**

**FM**

quickly look at the attacker and threat model just to contextualize our findings
28:2228 minutes, 22 secondsdds is a local system is situated deep in the control network and i would not expect to find any exposed
28:3028 minutes, 30 secondsdds node we checked we scanned we mass scanned the ip space for a few times but we haven't found any exposed dds nodes
28:3928 minutes, 39 secondsmaybe with the um with in the future we will see more and more rost2 implementations some of some
28:4728 minutes, 47 secondsof them may um go public for for for design or for mistakes uh so we might find some dds exposed
28:5628 minutes, 56 secondsnodes in the future but i would say that dds from an attacker's 10 points dds is more for local
29:0429 minutes, 4 secondsattack opportunities such as discovery of other endpoints or lateral movements and why not from a malware writer standpoint
29:1429 minutes, 14 secondscould be a good a good protocol to implement a cnc system
