import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [name, setName] = useState('');
  const [menuWish, setMenuWish] = useState('');
  const [drinkWish, setDrinkWish] = useState('');
  const [withFriend, setWithFriend] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, укажите ваше имя",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Спасибо! 🎉",
      description: "Мы получили вашу заявку. Скоро увидимся!",
    });

    setName('');
    setMenuWish('');
    setDrinkWish('');
    setWithFriend(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-snowfall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block mb-4">
              <Icon name="Sparkles" size={48} className="text-accent animate-glow" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Новогодняя
              <br />
              Вечеринка
            </h1>
            
            <div className="space-y-2 text-muted-foreground text-lg">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Calendar" size={20} />
                <span>31 декабря 2025</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Clock" size={20} />
                <span>20:00</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-foreground/80 max-w-xl mx-auto leading-relaxed">
              Встречаем Новый Год вместе! Ждём тебя на самой тёплой и уютной вечеринке года.
            </p>
          </div>

          <Card className="p-8 md:p-10 backdrop-blur-sm bg-card/50 border-border/50 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold flex items-center justify-center gap-3">
                  <Icon name="UserCheck" size={28} />
                  Подтверждение участия
                </h2>
                <p className="text-muted-foreground">
                  Заполни форму, чтобы мы знали, что ты будешь
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">
                  Твоё имя *
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван Иванов"
                  className="h-12 text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="menu" className="text-base">
                  Пожелания по меню
                </Label>
                <Textarea
                  id="menu"
                  value={menuWish}
                  onChange={(e) => setMenuWish(e.target.value)}
                  placeholder="Предпочтения, аллергии или особые пожелания..."
                  className="min-h-24 text-base resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="drinks" className="text-base">
                  Пожелания по алкоголю
                </Label>
                <Textarea
                  id="drinks"
                  value={drinkWish}
                  onChange={(e) => setDrinkWish(e.target.value)}
                  placeholder="Что ты предпочитаешь из напитков..."
                  className="min-h-24 text-base resize-none"
                />
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg bg-secondary/30 border border-border/50">
                <Checkbox
                  id="friend"
                  checked={withFriend}
                  onCheckedChange={(checked) => setWithFriend(checked as boolean)}
                  className="h-5 w-5"
                />
                <Label
                  htmlFor="friend"
                  className="text-base font-normal cursor-pointer flex items-center gap-2"
                >
                  <Icon name="Users" size={18} />
                  Приду с другом
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg h-14 font-semibold group"
              >
                <Icon name="Send" size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                Подтвердить участие
              </Button>
            </form>
          </Card>

          <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <Icon name="MapPin" size={18} />
              <span className="text-sm">Адрес будет отправлен после подтверждения</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
