import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Clock, User, MessageSquare, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
  read: boolean;
}

const Messages = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast({
        title: "Error",
        description: "Failed to load messages",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ read: true })
        .eq('id', id);

      if (error) throw error;

      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, read: true } : msg
      ));

      toast({
        title: "Marked as read",
        description: "Message status updated",
      });
    } catch (error) {
      console.error('Error updating message:', error);
      toast({
        title: "Error",
        description: "Failed to update message",
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Messages</h1>
            <p className="text-muted-foreground">
              {messages.length} total messages • {messages.filter(m => !m.read).length} unread
            </p>
          </div>
        </div>

        {selectedMessage ? (
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    {selectedMessage.name}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {selectedMessage.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {formatDate(selectedMessage.created_at)}
                    </span>
                  </CardDescription>
                </div>
                <Button variant="ghost" onClick={() => setSelectedMessage(null)}>
                  Close
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Subject</h3>
                  <p className="text-muted-foreground">{selectedMessage.subject}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Message</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
                {!selectedMessage.read && (
                  <Button onClick={() => markAsRead(selectedMessage.id)}>
                    Mark as Read
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-0">
              <div className="md:hidden p-4 space-y-3">
                {messages.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No messages yet
                  </div>
                ) : (
                  messages.map((message) => (
                    <Card key={message.id} className="border-border/60">
                      <CardContent className="p-4 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-semibold text-sm truncate">{message.name}</p>
                          <Badge variant={message.read ? "secondary" : "default"}>
                            {message.read ? "Read" : "Unread"}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{message.email}</p>
                        <p className="text-sm text-foreground line-clamp-2">{message.subject}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(message.created_at)}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={() => setSelectedMessage(message)}
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          View Message
                        </Button>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>

              <div className="hidden md:block overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Status</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {messages.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                          No messages yet
                        </TableCell>
                      </TableRow>
                    ) : (
                      messages.map((message) => (
                        <TableRow key={message.id} className="cursor-pointer hover:bg-muted/50">
                          <TableCell>
                            <Badge variant={message.read ? "secondary" : "default"}>
                              {message.read ? "Read" : "Unread"}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-medium">{message.name}</TableCell>
                          <TableCell>{message.email}</TableCell>
                          <TableCell className="max-w-xs truncate">{message.subject}</TableCell>
                          <TableCell className="text-muted-foreground text-sm">
                            {formatDate(message.created_at)}
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedMessage(message)}
                            >
                              <MessageSquare className="w-4 h-4 mr-2" />
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Messages;
