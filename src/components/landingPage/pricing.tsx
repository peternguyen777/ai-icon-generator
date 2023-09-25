import { CheckCircle, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import useLoginRedirect from "~/hooks/useLoginRedirect";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  properties: string[];
  includeButton?: boolean;
  includeComingSoon?: boolean;
}

const PricingCard = ({
  title,
  description,
  price,
  properties,
  includeButton = false,
  includeComingSoon = false,
}: PricingCardProps) => {
  const { loginRedirectHandler } = useLoginRedirect();

  return (
    <Card className="relative transition-all duration-200 sm:hover:scale-105 sm:hover:bg-secondary sm:hover:outline sm:hover:outline-2 sm:hover:outline-offset-2">
      {includeComingSoon && (
        <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-1/2 transform rounded-lg bg-primary px-4">
          <p className="font-clash font-semibold text-white">Coming soon!</p>
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-clash font-semibold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-between">
        <div>
          <span className="flex font-clash text-2xl font-bold">{`${price}`}</span>
          <div className="mt-6">
            {properties.map((item, index) => (
              <>
                <div className="flex items-center gap-2">
                  {index === 0 ? <CheckCircle /> : <CheckCircle2 />}
                  <p className="text-sm">{item}</p>
                </div>
                {index < properties.length - 1 && (
                  <Separator className="my-2" />
                )}
              </>
            ))}
          </div>
        </div>
        {includeButton && (
          <Button
            className="mt-10 font-clash text-base font-semibold"
            onClick={loginRedirectHandler}
          >
            Get Started!
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

const Pricing = () => {
  return (
    <section className="container px-4 pb-16 pt-16 sm:px-8 sm:pb-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-left ">Pricing</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <PricingCard
            title="Trial"
            description="For personal use and exploration of AI technology."
            price="Free"
            properties={["5 included credits", "Personal Gallery"]}
            includeButton
          />
          <PricingCard
            title="Premium"
            description="Perfect for advanced users and dog art aficionados."
            price="$5.00"
            properties={[
              "100 included credits",
              "Personal Gallery",
              "Downloadable PNGs",
            ]}
          />
          <PricingCard
            title="Professional"
            description="Perfect for businesses and advanced users looking for a premium service."
            price="$20.00/month"
            properties={[
              "Unlimited credits",
              "Professional Gallery",
              "Hi-Res Downloadable PNGs",
            ]}
            includeComingSoon
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
