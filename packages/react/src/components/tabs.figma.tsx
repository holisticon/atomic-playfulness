import { figma } from "@figma/code-connect";
import { Icon } from "./icon.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs.tsx";

figma.connect(
  Tabs,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=553%3A10766",
  {
    props: {},
    example: () => (
      <Tabs>
        <TabsList>
          <TabsTrigger value="dashboard">
            <Icon name="House" size="small" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <Icon name="Activity" size="small" />
            Analytics
          </TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard">
          <div>
            <h3>Dashboard</h3>
            <ul>
              <li>Metric 1</li>
              <li>Metric 2</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="analytics">
          <div>
            <h3>Analytics</h3>
            <p>Charts and graphs would go here...</p>
          </div>
        </TabsContent>
      </Tabs>
    ),
  },
);
