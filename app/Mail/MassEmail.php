<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MassEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $subjectLine;
    public $body;

    public function __construct(string $subject, string $body)
    {
        $this->subjectLine = $subject;
        $this->body = $body;
    }

    public function build()
    {
        return $this->subject($this->subjectLine)
            ->view('emails.mass-email');
    }
}
